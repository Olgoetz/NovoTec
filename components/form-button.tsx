import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hookStatus: string;
}

const FormButton = ({ children, hookStatus, ...props }: FormButtonProps) => {
  const loading = hookStatus === "executing" ? true : false;
  return (
    <Button {...props} disabled={loading} type="submit">
      <span className="flex items-center justify-center gap-1">
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
};
export default FormButton;
