function normalizeUnits(manifest) {
    const normalized = { ...manifest };
    if (normalized.unit === "lb") {
        normalized.weight = normalized.weight * 0.45;
        normalized.unit = "kg";
    }
    return normalized;
}

function validateManifest(manifest) {
    const errors = {};
    const keys = ["containerId", "destination", "weight", "unit", "hazmat"];
    const validators = {
        containerId: (v) => typeof v === "number" && Number.isInteger(v) && v > 0,
        destination: (v) => typeof v === "string" && v.trim().length > 0,
        weight: (v) => typeof v === "number" && !Number.isNaN(v) && v > 0,
        unit: (v) => typeof v === "string" && (v == "kg" || v == "lb"),
        hazmat: (v) => typeof v === "boolean"
    };
    for (const key of keys) {
        if (!Object.prototype.hasOwnProperty.call(manifest, key)) {
            errors[key] = "Missing"
        } else if (!validators[key](manifest[key])) {
            errors[key] = "Invalid";
        }
    }
    return errors;
}

function processManifest(manifest) {
    const errors = validateManifest(manifest);
    if (Object.keys(errors).length === 0) {
        console.log(`Validation success: ${manifest.containerId}`);
        const normalized = normalizeUnits(manifest);
        console.log(`Total weight: ${normalized.weight} kg`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
}

console.log("--- 1. Testing Process manifest ---");

const orignalLb = { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true };

processManifest(orignalLb);
console.log("--- 1. Testing normalizeUnits ---");
const originalLb = { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true };
const normalizedLb = normalizeUnits(originalLb);
console.log("Result (lb -> kg):", normalizedLb);

console.log(processManifest(originalLb))