import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const Selectfield = ({ handleSelection, selectedSort }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[200px] text-sm text-slate-400 flex flex-row justify-between items-center p-2 border border-slate-200 rounded-md">
        <span>{selectedSort}</span>
        <ChevronDownIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] text-sm text-slate-400 p-2 bg-slate-800">
        <DropdownMenuItem onClick={() => handleSelection("default", "Terbaru")}>
          Terbaru
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelection("random", "Random")}>
          Random
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelection("lowToHigh", "Harga Terendah")}
        >
          Harga Terendah
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelection("highToLow", "Harga Tertinggi")}
        >
          Harga Tertinggi
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelection("discount", "Diskon Tertinggi")}
        >
          Presentase Diskon Tertinggi
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSelection("mostPopular", "Paling Favorit")}
        >
          Paling Favorit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Selectfield;
