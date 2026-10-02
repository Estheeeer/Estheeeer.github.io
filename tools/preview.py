"""Preview the static portfolio with GitHub Pages-style extensionless links."""

import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit


class PortfolioHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parts = urlsplit(self.path)
        if not Path(parts.path).suffix and not parts.path.endswith("/"):
            self.path = urlunsplit(parts._replace(path=parts.path + ".html"))
        super().do_GET()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=4173)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent.parent

    def handler(*args, **kwargs):
        return PortfolioHandler(*args, directory=str(root), **kwargs)

    server = ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    print(f"Preview: http://127.0.0.1:{args.port}/about", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
