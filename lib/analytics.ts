export function track(event: string) {
  void fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ event, page: window.location.pathname }), keepalive: true }).catch(() => {});
}
