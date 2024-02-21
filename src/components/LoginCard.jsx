import { Button, Card, Checkbox, Label, Select, TextInput } from "flowbite-react";

export default function LoginCard({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
  remember,
  setRemeber,
}) {
  return (
    <Card className="w-96 h-96">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Senha" />
          </div>
          <TextInput
            id="password1"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="role1" value="Acesso" />
          </div>
          <Select
            id="role1"
            type="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            required
          >
           <option selected value="student">Estudante</option>
           <option value="teacher">Professor</option>
           <option value="admin">Administrador</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label className="text-xs" htmlFor="remember">
            Mantenha-me conectado
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
