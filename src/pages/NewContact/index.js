import PageHeader from '../../components/PageHeader';
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
    </>
  );
}
