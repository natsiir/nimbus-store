import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const Selectfield = ({ handleSortChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[200px] text-sm text-slate-400 flex flex-row justify-between items-center p-2 border border-slate-200 rounded-md">
        <span>Urutkan Berdasarkan</span>
        <ChevronDownIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onChange={(e) => handleSortChange(e.target.value)}
        className="w-[200px] text-sm text-slate-400 p-2 bg-slate-800"
      >
        <DropdownMenuItem onClick={() => handleSortChange("default")}>
          Terbaru
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("random")}>
          Random
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("lowToHigh")}>
          Harga Terendah
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("highToLow")}>
          Harga Tertinggi
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("discount")}>
          Presentase Diskon Tertinggi
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange("mostPopular")}>
          Paling Favorit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Selectfield;
