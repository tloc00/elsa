import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {getSocket} from "../../lib/socket.config"
const Quiz = () => {
  const [code, setCode] = useState("");
  const [isJoinSuccess, setIsJoinSuccess] = useState(false)
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }, []);

  const socket = useMemo(() => {
    const socket = getSocket(import.meta.env.VITE_SERVER_HOST || '');
    return socket.connect();
  }, []);

  const handleJoinRoom = useCallback(() => {
    socket.emit("join", {"code": code})
  }, [code, socket]);

  useEffect(() => {
    socket.on("join_success", () => {
      setIsJoinSuccess(true)
    })
  }, [socket])

  return (
    <>
    {
      isJoinSuccess ? <p>Join room success</p> : <>
        <p>Input code</p>
        <input value={code} onChange={handleInput} placeholder="Input code"/>
        <button onClick={handleJoinRoom}>Join</button>
      </>
    }
    </>
  )
}

export default Quiz