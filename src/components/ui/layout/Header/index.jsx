
import { DockDemo } from "../Header/Magnifier";
export default function index() {
  return (
    // <div className="">

    // </div>
    <div className="fixed mt-[1.5rem] md:px-6 md:sticky  md:flex md:items-center md:bottom-0 md:justify-between md:top-4    bottom-4 w-full    z-50">
      <div className="hidden md:inline-flex md:text-sm">
        <h1>Asia/Jakarta</h1>
      </div>
      <DockDemo />
      <div className="hidden md:inline-flex md:text-sm">
        <h1>Asia/Jakarta</h1>
      </div>
    </div>
  );
}
