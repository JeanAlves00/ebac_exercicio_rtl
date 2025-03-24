import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from ".";

describe("Teste para o componente PostComments", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComments />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar um comentário quando o formulário for enviado", () => {
    render(<PostComments />);

    // Obter os elementos necessários
    const textarea = screen.getByRole("textbox");
    const botao = screen.getByText("Comentar");

    // Simular digitação e envio do formulário
    fireEvent.change(textarea, { target: { value: "Teste de comentário" } });
    fireEvent.click(botao);

    // Verificar se o comentário foi adicionado
    expect(screen.getByText("Teste de comentário")).toBeInTheDocument();

    // Verificar se o textarea foi limpo
    expect(textarea).toHaveValue("");
  });

  it("Deve adicionar dois comentários consecutivos", () => {
    render(<PostComments />);

    // Obter os elementos usando data-testid
    const commentInput = screen.getByTestId("comment-input");
    const submitButton = screen.getByTestId("comment-submit");

    // Adicionar o primeiro comentário
    fireEvent.change(commentInput, {
      target: { value: "Primeiro comentário" },
    });
    fireEvent.click(submitButton);

    // Verificar se o primeiro comentário foi adicionado
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    // Adicionar o segundo comentário
    fireEvent.change(commentInput, { target: { value: "Segundo comentário" } });
    fireEvent.click(submitButton);

    // Verificar se ambos os comentários estão presentes
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();

    // Verificar se existem dois itens de comentário
    const commentItems = screen.getAllByTestId("comment-item");
    expect(commentItems).toHaveLength(2);

    // Verificar se o textarea foi limpo após os envios
    expect(commentInput).toHaveValue("");
  });
});
