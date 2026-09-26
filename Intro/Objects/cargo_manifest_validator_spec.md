# Build a Cargo Manifest Validator

In this lab, you will use JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

## Manifest Schema

Each cargo manifest is represented as an object with the following properties:

* **`containerId`**: A positive integer identifying the associated cargo container.
* **`destination`**: A non-empty string (after trimming whitespace) denoting the cargo's target destination.
* **`weight`**: A positive number representing the cargo's weight.
* **`unit`**: A string describing the unit of the cargo's `weight` property (either `"kg"` for kilograms or `"lb"` for pounds).
* **`hazmat`**: A boolean value indicating whether hazardous material handling is needed.

### Example Manifest Object

```javascript
{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}
```

---

## Objective

Fulfill the user stories below and get all the tests to pass to complete the lab.

---

## User Stories

### 1. Normalize Weight Units
* Implement a function named `normalizeUnits` with a `manifest` parameter.
* The function **must not mutate** the original `manifest` object and must always return a new object where `weight` is normalized to kilograms and `unit` is set to `"kg"`.
* If the weight of the manifest object is expressed in pounds (`unit: "lb"`), convert the weight to kilograms using the approximate conversion **$1 \text{ lb} = 0.45 \text{ kg}$**, and update the unit accordingly.
* If the weight is already expressed in kilograms (`unit: "kg"`), the weight and unit should remain unchanged.

### 2. Validate Manifest
* Implement a function named `validateManifest` with a `manifest` parameter.
* The function **must not mutate** the original `manifest` object and must always return a new object.
* If the input manifest is valid (no missing or invalid properties), the function should return an empty object (`{}`).
* If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property:
  * Missing properties should have the value `"Missing"`.
  * Invalid properties should have the value `"Invalid"`.

**Example return value** (where destination is missing and weight is invalid):

```javascript
{
  destination: "Missing",
  weight: "Invalid"
}
```

### 3. Process Manifest
* Implement a function named `processManifest` with a `manifest` parameter.
* The function should perform console logging based on validity:
  * **If valid**: 
    1. Log: `Validation success: ${containerId}`
    2. Log the manifest's weight in kilograms: `Total weight: ${weight} kg` *(use `normalizeUnits()` for this conversion)*.
  * **If not valid**: 
    1. Log: `Validation error: ${containerId}`
    2. Log the object returned by calling `validateManifest()` with the manifest object.

---

> [!NOTE]
> * Each of the two cases in `processManifest` should perform **two** separate `console.log()` calls.
> * Do **not** declare `normalizeUnits`, `validateManifest`, or `processManifest` using `const`, as the test suite needs to reassign them.