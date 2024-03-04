import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-5 w-4"/>
      <span className="ml-2">{message}</span>
    </div>
  );
};
