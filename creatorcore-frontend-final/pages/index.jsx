import { useState } from 'react';

export default function Dashboard() {
  const [tab, setTab] = useState('script');

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6">CreatorCore Dashboard</h1>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setTab('script')} className="border px-4 py-2 rounded">Script Generator</button>
        <button onClick={() => setTab('voice')} className="border px-4 py-2 rounded">Voice Generator</button>
        <button onClick={() => setTab('video')} className="border px-4 py-2 rounded">Video Creator</button>
      </div>

      {tab === 'script' && <ScriptTool />}
      {tab === 'voice' && <VoiceTool />}
      {tab === 'video' && <VideoTool />}
    </div>
  );
}

function ScriptTool() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generateScript = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-script`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data.choices?.[0]?.message?.content || 'No result');
  };

  return (
    <div>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter video idea..." className="w-full p-2 text-black" />
      <button onClick={generateScript} className="mt-2 px-4 py-2 bg-blue-600 rounded">Generate Script</button>
      <pre className="mt-4 whitespace-pre-wrap bg-gray-800 p-2">{result}</pre>
    </div>
  );
}

function VoiceTool() {
  const [script, setScript] = useState('');
  const [voiceId, setVoiceId] = useState('');
  const [result, setResult] = useState(null);

  const generateVoice = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-voice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ script, voice_id: voiceId })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <textarea value={script} onChange={e => setScript(e.target.value)} placeholder="Paste script here..." className="w-full p-2 text-black" />
      <input value={voiceId} onChange={e => setVoiceId(e.target.value)} placeholder="Enter voice ID" className="w-full p-2 mt-2 text-black" />
      <button onClick={generateVoice} className="mt-2 px-4 py-2 bg-green-600 rounded">Generate Voice</button>
      <pre className="mt-4 whitespace-pre-wrap bg-gray-800 p-2">{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

function VideoTool() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generateVideo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(JSON.stringify(data));
  };

  return (
    <div>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter cinematic prompt..." className="w-full p-2 text-black" />
      <button onClick={generateVideo} className="mt-2 px-4 py-2 bg-purple-600 rounded">Generate Video</button>
      <pre className="mt-4 whitespace-pre-wrap bg-gray-800 p-2">{result}</pre>
    </div>
  );
}