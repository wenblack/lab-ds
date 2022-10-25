import { Heading } from "./components/Heading/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text/Text";
import "./styles/global.css";
import {
  TextInputRoot,
  TextInputIconEmail,
  TextInputIconPassword,
  TextInputInput,
} from "./components/TextInput/TextInput";
import { Button } from "./components/Button/Button";
import { Checkbox } from "./components/CheckBox/Checkbox";

export function App() {
  return (
    <main className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar !
        </Text>
      </header>

      <form className="mt-10" id="login-form">
        <label htmlFor="email" className="font-semibold">
          <Text size="md">Endereço de E-mail</Text>
        </label>

        <TextInputRoot className="w-96 mt-3 mb-3">
          <>
            <TextInputIconEmail />
            <TextInputInput
              placeholder="Digite seu nome de usuário ou e-mail"
              type="email"
              id="email"
            />
          </>
        </TextInputRoot>

        <label htmlFor="password" className="font-semibold">
          <Text size="md">Senha</Text>
        </label>

        <TextInputRoot className="w-96 mt-3 mb-4">
          <>
            <TextInputIconPassword />
            <TextInputInput
              placeholder="Digite sua senha"
              type="password"
              id="password"
            />
          </>
        </TextInputRoot>

        <div className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>

        <Button className="w-96 mt-11">Criar Conta</Button>
      </form>

      <footer className="flex flex-col items-center mt-6 gap-4">
        <a href="#">
          <Text className="underline text-gray-400 text-sm">
            Esqueceu sua senha?
          </Text>
        </a>
        <a href="#">
          <Text className="underline text-gray-400 text-sm">
            Não possui conta? Crie uma agora
          </Text>
        </a>
      </footer>
    </main>
  );
}
