"use client";

import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function chamarApi() {
    setCarregando(true);

    try {
      const res = await fetch(
        `/api/saudacao?nome=${encodeURIComponent(nome)}`
      );

      const dados = await res.json();
      setResposta(dados.mensagem);
    } catch {
      setResposta("Erro ao chamar a API.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Meu primeiro deploy automático na Vercel!</h1>

      <p>
        Digite seu nome e clique no botão para chamar a API:
      </p>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
        style={{
          padding: 8,
          marginRight: 8,
          border: "1px solid #888",
          borderRadius: 4,
        }}
      />

      <button onClick={chamarApi} disabled={carregando}>
        {carregando ? "Chamando..." : "Chamar API"}
      </button>

      {resposta && <p>{resposta}</p>}
    </main>
  );
}