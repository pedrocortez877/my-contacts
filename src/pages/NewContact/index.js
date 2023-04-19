import PageHeader from '../../components/PageHeader';
import Button from '../../components/button';
import Input from '../../components/input';
import Select from '../../components/select';

export default function Home() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">Salvar alterações</Button>
      <Button type="button" disabled>Salvar alterações</Button>
    </>
  );
}
