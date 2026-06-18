import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary font-bold text-lg">
          <Code2 className="w-5 h-5" />
          <span>E.J.P</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Edu Juanda Pratama. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
