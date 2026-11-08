// Browser API compatibility shim
// Ensures the Promise-based 'browser' namespace is available in all browsers (Firefox, Chrome, Edge)

if (typeof globalThis.browser === "undefined") {
	globalThis.browser = globalThis.chrome;
}
