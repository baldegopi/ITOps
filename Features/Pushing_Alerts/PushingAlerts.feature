@PushingAlerts @ITOps_Milestone_1

Feature: Pushing Alerts

  Scenario Outline: Successfully send Alerts


    Given User opens rabbitMQ
    When user enters Username and Password "<rabbitMQ_User>", "<rabbitMQ_Password>"
    And user clicks on Login button
    And user clicks on the project "<ProjectName>" "<ProjectNameForAlert>"
    And user enters to the queue "<ToQueue>"
    And user enters the routing key "<RouteKey>"
    When datatojson "<AlertName>" "<NodeIPAddress>" "<ObjectName>"
    And user enters the payload
    And user clicks on publish
    And user opens itops application
    And "admin" enters Username, Password and click on Login button "<Itops_UserName>", "<Itops_Password>"
    And "admin" selects project and open alerts
    Then Success message for alerts displayed in Alerts console "<Alerts>" "<alertName>"
    And click on logout button


    Examples:
      | rabbitMQ_User | rabbitMQ_Password | Itops_UserName | Itops_Password | Alerts             | ProjectName   | ProjectNameForAlert          | ToQueue                    | RouteKey                   | alertName          | AlertName          | NodeIPAddress | ObjectName |
      | admin         | j5c6ym6nFm8M2Yia  | Itops_admin    | qa123          | NewSolarWindAlert1 | Automation_02 | 1.978.Automation_02.exchange | 1.978.Automation_008.queue | 1.978.Automation_008.queue | NewSolarWindAlert1 | NewSolarWindAlert1 | Demo          | Sample     |



