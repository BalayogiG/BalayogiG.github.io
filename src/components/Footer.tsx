export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 text-center">
      <p className="text-sm text-muted">&copy; {year} Balayogi G. All rights reserved.</p>
    </footer>
  );
}
