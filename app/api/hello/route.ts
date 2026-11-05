export async function GET() {
  console.log("API /api/hello executada com sucesso!");

  return Response.json({
    mensagem: "Olá! Esta resposta veio da minha API 🚀",
    horario: new Date().toISOString(),
    turma: process.env.DSM_TURMA,
  });
}