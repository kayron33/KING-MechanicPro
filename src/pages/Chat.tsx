import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse('');
    setError('');
    try {
      const res = await fetch('http://localhost:8000/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || 'Request failed');
      }
      setResponse(data.response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold mb-4">Chat with Gemini</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <textarea
          className="w-full border p-2"
          placeholder="Ask something..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded-md">
          <p>{response}</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Chat;
