function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center bg-dark fixed-bottom">
        <p className="text-light text-center">
          Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
}

export default Footer;
