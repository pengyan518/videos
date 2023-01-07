const dashed = (camel: string) => camel.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
export default dashed
