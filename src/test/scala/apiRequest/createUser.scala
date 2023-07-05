package apiRequest

import io.gatling.core.Predef.{jsonPath, *}
import io.gatling.http.Predef.*


class createUser extends Simulation {

  //protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api")
  //scenario
  val createUser =
    exec(
      http("Add User")
        .post("/users")
        .asJson
        .body(StringBody(
          """
            |{
            |    "name": "morpheus",
            |    "job": "leader"
            |}
            |
            |""".stripMargin))
        .check(
          status is 201,
          jsonPath("$.id").notNull,
          status not 500,
        )
    )
  val getAllUser =
    exec(
      http("Get All User")
        .get("/users?page=1")
        .asJson
        .check(
          jsonPath("$.data[1].id").saveAs("userId"),
          jsonPath("$.data[1].first_name").saveAs("userName"),
          status is 200
        )
    )
  val getUser =
    exec(session => {
      val userName = session("userName").as[String]
      session
        .set("userName", userName)
    })
      .exec(session => {
        val userId = session("userId").as[String]
        session
          .set("userId", userId)
      })
    .exec(
      http("Get Single User")
        .get("/users/2")
        .asJson
        .check(
          status is 200,
          jsonPath("$.data.id").is("${userId}"),
          jsonPath("$.data.first_name").is("${userName}")
        )
    )

  val scn = scenario("Create and get User")
    .exec(createUser)
    .exec(getAllUser)
    .exec(getUser)

  //setUp

  setUp(
    scn.inject(rampUsers(1).during(5))
  ).protocols(httpProtocol)

}
