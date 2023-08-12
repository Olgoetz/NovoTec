import { cn } from "@/lib/utils";

interface Styles {
  classes?: string;
}

const NovoTec = ({ classes }: Styles) => {
  return (
    <div className={cn("inline-block", classes)}>
      <p>
        <span className="font-semibold text-secondary-foreground">Novo</span>
        <span className="font-semibold text-primary-foreground">Tec</span>
      </p>
    </div>
  );
};

export default NovoTec;
