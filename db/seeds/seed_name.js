export const seed = (knex) => {
  const data = []

  for (let index = 0; index < 5; index++) {
    data.push({ name: "Volodya", phone: "+380505618662", email: "testex@gmail.com", password: "1231231230" })
  }
  return knex("users")
    .del()
    .then(async function () {
      await knex("users").insert(data)
    })
}