import { render, screen } from "@testing-library/react";
import PatientCard from "../components/PatientCard";

const mockPatient = {
  id: 1,
  name: "John Doe",
  age: 45,
  condition: "diabetes",
};

test("renders patient details correctly", () => {
  render(<PatientCard patient={mockPatient} />);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Age: 45")).toBeInTheDocument();
  expect(screen.getByText("Condition: diabetes")).toBeInTheDocument();
});
