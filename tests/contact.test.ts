import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../src/lib/contact-validation.ts";
const valid = {
  name: "Persona de prueba",
  company: "Empresa de prueba",
  role: "",
  email: "prueba@example.com",
  phone: "",
  service: "Consultoría",
  message: "Necesitamos integrar procesos de inventario.",
  consent: true,
  website: "",
};
test("accepts a valid inquiry and trims input", () => {
  const result = validateContact({ ...valid, name: "  Persona de prueba  " });
  assert.equal(result.data?.name, valid.name);
  assert.deepEqual(result.errors, {});
});
test("rejects malformed and missing input", () => {
  for (const input of [null, [], "text", {}])
    assert.ok(Object.keys(validateContact(input).errors).length);
});
test("rejects fake consent and unknown services", () => {
  const result = validateContact({
    ...valid,
    consent: "true",
    service: "invalid",
  });
  assert.ok(result.errors.consent);
  assert.ok(result.errors.service);
  assert.equal(result.data, undefined);
});
test("rejects invalid email, phone and excessive text", () => {
  const result = validateContact({
    ...valid,
    email: "invalid",
    phone: "<script>",
    message: "a".repeat(3001),
  });
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
});
