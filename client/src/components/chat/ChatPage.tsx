// // import React, { useEffect, useRef, useState } from 'react';
// // import { ChatMessageAPIType } from './chat-api';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //   selectChat,
// //   sendMessage,
// //   startMessagesListening,
// //   stopMessagesListening,
// // } from './chatSlice';
// // import { RootState } from '../../redux/store';
// import React from "react";

// export default function ChatPage(): JSX.Element {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

// // const ChatPage: React.FC = () => {
// //   return (
// //     <div>
// //
// //       {/* <Chat />
// //       <UsersList /> */}
// //     </div>
// //   );
// // };

// // const UsersList: React.FC = () => {
// //   const users = useSelector((state: RootState) => state.chat.users);

// //   return (
// //     <div>
// //       <h2>Users in the chat:</h2>
// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.userId}>
// //             <img
// //               src={user.userPhoto}
// //               style={{ width: '30px' }}
// //               alt={user.userName}
// //             />
// //             {user.userName}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // const Chat: React.FC = () => {
// //   const dispatch = useDispatch();
// //   const status = useSelector((state: RootState) => selectChat(state).status);

// //   useEffect(() => {
// //     dispatch(startMessagesListening() as any);
// //     return () => {
// //       dispatch(stopMessagesListening() as any);
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {status === 'error' && (
// //         <div>Some error occured. Please refresh the page</div>
// //       )}
// //       <>
// //         <Messages />
// //         <AddMessageForm />
// //       </>
// //     </div>
// //   );
// // };

// // const Messages: React.FC<{}> = ({}) => {
// //   const messages = useSelector((state: RootState) => state.chat.messages);
// //   const messagesAnchorRef = useRef<HTMLDivElement>(null);
// //   const [isAutoScroll, setIsAutoScroll] = useState(true);

// //   const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
// //     const element = e.currentTarget;
// //     if (
// //       Math.abs(
// //         element.scrollHeight - element.scrollTop - element.clientHeight
// //       ) < 300
// //     ) {
// //       !isAutoScroll && setIsAutoScroll(true);
// //     } else {
// //       isAutoScroll && setIsAutoScroll(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (isAutoScroll) {
// //       messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   }, [messages]);

// //   return (
// //     <div
// //       style={{ height: '400px', overflowY: 'auto' }}
// //       onScroll={scrollHandler}
// //     >
// //       {messages.map((m, index) => (
// //         <Message key={m.id} message={m} />
// //       ))}
// //       <div ref={messagesAnchorRef}></div>
// //     </div>
// //   );
// // };

// // // В вашем компоненте Message.tsx
// // const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(
// //   ({ message }) => {
// //     const author = useSelector((state: RootState) =>
// //       state.chat.users.find((user) => user.userId === message.authorId)
// //     );

// //     return (
// //       <div>
// //         <img
// //           src={author?.userPhoto}
// //           style={{ width: '30px' }}
// //           alt={author?.userName}
// //         />
// //         <b>{author?.userName}</b>
// //         <br />
// //         {message.message}
// //         <hr />
// //       </div>
// //     );
// //   }
// // );

// // const AddMessageForm: React.FC<{}> = () => {
// //   const [message, setMessage] = useState('');
// //   const dispatch = useDispatch();

// //   const status = useSelector((state: RootState) => state.chat.status);

// //   const sendMessageHandler = () => {
// //     if (!message) {
// //       return;
// //     }
// //     dispatch(sendMessage(message) as any);
// //     setMessage('');
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <textarea
// //           onChange={(e) => setMessage(e.currentTarget.value)}
// //           value={message}
// //         ></textarea>
// //       </div>
// //       <div>
// //         <button disabled={status !== 'ready'} onClick={sendMessageHandler}>
// //           Send
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatPage;


import React, { useState, useEffect } from 'react';
// import './styles/ChatPage.css';
import styles from './styles/ChatPage.module.scss'; // Подключила модульный scss
import { useNavigate } from 'react-router-dom';
import Message from '../room/Message';

function ChatPage() {
  const [ws, setWs] = useState<WebSocket | null>(null); // Правильно инициализируем состояние
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    const newWs = new WebSocket('wss://pinter.fun/ws/');

    newWs.onopen = () => {
      console.log('WebSocket connection established');
    };

    newWs.onmessage = (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const message = reader.result as string;
          setMessages((prevMessages) => [...prevMessages, message]);
        };
        reader.readAsText(event.data);
      } else {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      }
    };

    newWs.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setWs(newWs); // Корректно обновляем состояние

    return () => {
      newWs.close();
    };
  }, []);

  const sendMessage = async () => {
    if (input.trim() && ws) {
      ws.send(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Здесь выполняется  логика отправки сообщения
      sendMessage();
    }
  };

  return (
    // <div className="chat-container">
    //   <h2>Чат</h2>
    //   <div className="messages-container">
    //     {messages.map((message, index) => (
    //       <p key={index}>{message}</p>
    //     ))}
    //   </div>
    //   <input
    //     className="input-message"
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //     placeholder="Введите сообщение"
    //   />
    //   <button className="send-button" onClick={sendMessage}>Отправить</button>
    // </div>
    // ___________выше находится код Сережи

    <div className={styles.chat}>
      <div className={styles.chat__header}>
        <h2>Чат встречи</h2>
        <div>
            <p>Тема: <span>Бизнес-ланч от Setters X Surf Coffee</span></p>
        </div>
        <h3 onClick={() => nav('/')}>На главную</h3>
      </div>

      <div className={styles.chat__body}>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <div className={styles.send_message}>
          <input
            // className="input-message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={sendMessage}
            onKeyDown={handleKeyPress}
            placeholder="Введите сообщение"
          />
          <button type="button" onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;