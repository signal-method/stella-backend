export function setupLogger() {

    function format(level: string, message: any[]) {
        const timestamp = new Date().toISOString()
        return `${timestamp} ${level} - ${message.join(" ")}\n`
    }

    console.log = (...args) => {
        process.stdout.write(format("LOG", args))
    }

    console.info = (...args) => {
        process.stdout.write(format("INFO", args))
    }

    console.warn = (...args) => {
        process.stdout.write(format("WARN", args))
    }

    console.error = (...args) => {
        process.stderr.write(format("ERROR", args))
    }
}
