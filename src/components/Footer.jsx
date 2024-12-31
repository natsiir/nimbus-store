import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-slate-900 text-white py-6 md:p-10  text-sm md:text-base gap-6 md:gap-0">
      <nav className="flex gap-4 font-medium text-base">
        <a href="#" className="hover:text-blue-600">
          Beranda
        </a>
        <div className="relative">
          <a href="#" className="hover:text-blue-600">
            Katalog
          </a>
        </div>
        <a href="#" className="hover:text-blue-600">
          Kontak
        </a>
      </nav>
      <div className="font-normal">
        <h3>@2024 Nimbus. All Right Reserved</h3>
      </div>
    </div>
  );
};
export default Footer;
