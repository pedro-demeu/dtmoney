import { Container } from "./styles";
import { Sumary } from "../Sumary/index";
import { TransactionsTable } from "../TransactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  );
}
