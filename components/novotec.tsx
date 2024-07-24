import { cn } from "@/lib/utils";
import { AiOutlineTrademark } from "react-icons/ai";
interface Styles {
  classes?: string;
}

const NovoTec = ({ classes }: Styles) => {
  return (
    <div className={cn("inline-block ", classes)}>
      <div className="flex">
        <p>
          <span className="text-secondary-foreground">Novo</span>
          <span className="text-primary-foreground">Tec</span>
        </p>
        <AiOutlineTrademark size={10} className="ml-[1px] text-novo-gray" />
      </div>
    </div>
  );
};

export default NovoTec;
