import { useState } from 'react'


function App() {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  
  const buttonText = sent ? 'Message sent' : 'Send';

  function buttonPressed() {
    setSent(true);
    setMsg('');

  }

  return (
    <div>
      <input
        disabled={sent}
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button
        disabled={sent}
        onClick={buttonPressed}
      >{buttonText}</button>

      <h3>{msg}</h3>
    </div>
  )
}


export default App