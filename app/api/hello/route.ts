export async function GET() {
  return Response.json({
    mensagem: "Olá! Esta resposta veio da minha API 🚀",
    horario: new Date().toISOString(),
  });
}