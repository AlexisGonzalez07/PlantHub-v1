import React, { useEffect, useState } from "react";
import {
  Progress,
  Button,
  Icon,
  Table,
  Segment,
  Grid,
  List,
  Modal,
} from "semantic-ui-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_WATER, REMOVE_PLANT } from "../utils/mutations";
import AddPlantForm from "../components/AddPlant";
import Auth from "../utils/auth";

export default function MyGarden() {
  const { loading, data, refetch } = useQuery(QUERY_ME);

  const [addWater, { error }] = useMutation(ADD_WATER);

  const [removePlant, { err }] = useMutation(REMOVE_PLANT);

  const [plantToggle, setPlantToggle] = React.useState(false);

  const handlePlantModal = () => {
    setPlantToggle(!plantToggle);
    refetch()
  };

  const plantData = data?.me.myPlants || [];

  const userData = data?.me || [];

  const [percent, setPercent] = useState(0);
  const [plantCount, setPlantCount] = useState(0);
  const [username, setUsername] = useState("");
  const [plantForm, setPlantForm] = useState("");

  const handleAddWater = async (plantId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    console.log("PlantID:" + plantId);
    try {
      const { plantData } = await addWater({
        variables: { plantId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlant = async (plantId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { plantData } = await removePlant({
        variables: { plantId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (data) {
      let newPercent = plantData.map((plant, i) => {
        let x = plant.waterAdded;
        let y = plant.waterNeeded;
        return ((x / y) * 100).toFixed();
      });
      setPercent(newPercent);
      setPlantCount(plantData.length);
      setUsername(userData.username);
    }
  }, [data, plantData, userData]);

  return (
    <>
      <div style={{ backgroundColor: "#EBDBAE" }}></div>
      <div className="garden-container">
        {Auth.loggedIn() ? (
          <>
            <br></br>
            <div style={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  p: 2,
                  m: 1,
                }}
              >
                <Grid stackable columns={1}>
                  <Grid.Column textAlign="center" width={16}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Oswald, sans-serif",
                        color: "#EBDBAE",
                      }}
                    >
                      Hello {username}, welcome to your garden
                    </Typography>
                  </Grid.Column>
                  <Grid.Column
                    width={16}
                    textAlign="center"
                    className="plantTable"
                    style={{ backgroundColor: "#EBDBAE" }}
                  >
                    <Table compact celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                textAlign: "center",
                                fontFamily: "Fuzzy Bubbles, cursive",
                                color: "#4f5902",
                              }}
                            >
                              Plant
                            </Typography>
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                textAlign: "center",
                                fontFamily: "Fuzzy Bubbles, cursive",
                                color: "#4f5902",
                              }}
                            >
                              Nickname
                            </Typography>
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                textAlign: "center",
                                fontFamily: "Fuzzy Bubbles, cursive",
                                color: "#4f5902",
                              }}
                            >
                              Hydration Status
                            </Typography>
                          </Table.HeaderCell>
                          <Table.HeaderCell>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                textAlign: "center",
                                fontFamily: "Fuzzy Bubbles, cursive",
                                color: "#4f5902",
                              }}
                            >
                              Water
                            </Typography>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {plantData.map((plant, i) => (
                          <Table.Row>
                            <Table.Cell>
                              {" "}
                              <Typography
                                variant="body2"
                                color="#4f5902"
                                align="center"
                              >
                                {plant.name}
                              </Typography>
                            </Table.Cell>
                            <Table.Cell>
                              {" "}
                              <Typography
                                variant="body2"
                                color="#4f5902"
                                align="center"
                              >
                                {plant.nickname}
                              </Typography>
                            </Table.Cell>
                            <Table.Cell>
                              <Progress
                                percent={percent[i]}
                                color="blue"
                                active
                              >
                                <Typography variant="body2" color="#4f5902">
                                  {percent[i]}% watered this month
                                </Typography>
                              </Progress>
                            </Table.Cell>
                            <Table.Cell>
                              <div align="center">
                                <Button
                                  compact
                                  id={plant.name}
                                  icon
                                  labelPosition="right"
                                  primary
                                  size="small"
                                  onClick={async () => {
                                    await handleAddWater(plant._id);
                                    await refetch();
                                  }}
                                >
                                  <Icon name="tint" />
                                  <Typography
                                    align="center"
                                    variant="body2"
                                    color="white"
                                  >
                                    Add Water
                                  </Typography>
                                </Button>
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>

                      <Table.Footer fullWidth>
                        <Table.Row>
                          <Table.HeaderCell />
                          <Table.HeaderCell colSpan="8">
                            <Segment textAlign="right">
                              <Typography variant="body1" color="#4f5902">
                                You have {plantCount} plants in your garden{" "}
                              </Typography>
                            </Segment>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                    </Table>
                  </Grid.Column>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  p: 2,
                  m: 1,
                }}
              >
                <Grid stackable columns={1} width={16} justifyContent="center">
                  <Grid.Column textAlign="center" width={16}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Oswald, sans-serif",
                        color: "#EBDBAE",
                      }}
                    >
                      Manage your Garden
                    </Typography>
                  </Grid.Column>
                  <Grid.Column textAlign="center" width={16}>
                    {plantForm}
                  </Grid.Column>
                  <Grid.Column
                    textAlign="center"
                    justifyContent="center"
                    width={16}
                  >
                    <div justifyContent="center" style={{ margin: 0 }}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          className="addplantbtn"
                          icon
                          labelPosition="left"
                          primary
                          size="small"
                          style={{ backgroundColor: "#EBDBAE" }}
                          onClick={(e) => {
                            handlePlantModal(e);
                          }}
                        >
                          <Icon color="#4f5902" name="remove circle" />
                          <Typography variant="body1" color="#4f5902">
                            Add Plant To Garden
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </Grid.Column>
                  {plantData.map((plant, i) => (
                    <Grid.Column
                      textAlign="center"
                      mobile={16}
                      tablet={8}
                      computer={4}
                    >
                      <Card
                        id="plant-card"
                        sx={{ maxWidth: 345, minWidth: 232, margin: 1, bgcolor: "#EBDBAE" }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image="./images/money-tree.webp"
                            alt={plant.name}
                            style={{ backgroundColor: "#4f5902" }}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h4"
                              component="div"
                              style={{
                                textAlign: "center",
                                fontFamily: "Fuzzy Bubbles, cursive",
                                color: "4f5902",
                              }}
                            >
                              {plant.nickname}
                            </Typography>
                            <List>
                              <List.Item>
                                {" "}
                                <Typography variant="body1" color="4f5902">
                                  Type: {plant.plantType}
                                </Typography>
                              </List.Item>
                              <List.Item>
                                {" "}
                                <Typography variant="body1" color="4f5902">
                                  Birthday: {plant.createdAt}
                                </Typography>
                              </List.Item>
                              <List.Item>
                                {" "}
                                <Typography variant="body1" color="4f5902">
                                  Size: {plant.plantSize}
                                </Typography>
                              </List.Item>
                              <List.Item>
                                {" "}
                                <Typography variant="body1" color="4f5902">
                                  Days watered this month: {plant.waterAdded}
                                </Typography>
                              </List.Item>
                            </List>

                            <div style={{ textAlign: "center" }}>
                              <Button
                                className="removegardenbtn"
                                icon
                                labelPosition="left"
                                primary
                                size="small"
                                style={{ backgroundColor: "#4f5902" }}
                                onClick={async () => {
                                  await handleDeletePlant(plant._id);
                                  await refetch();
                                }}
                              >
                                <Icon name="remove circle" />
                                <Typography variant="body1" color="white">
                                  Remove from Garden
                                </Typography>
                              </Button>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid.Column>
                  ))}
                </Grid>
              </Box>
            </div>
          </>
        ) : (
          <div className="content-container">
            <Grid stackable columns={1}>
              <Grid.Column textAlign="center" width={16}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  style={{
                    textAlign: "center",
                    fontFamily: "Oswald, sans-serif",
                    color: "#EBDBAE",
                  }}
                >
                  You Must Make an Account to Manage your Garden
                </Typography>
              </Grid.Column>
            </Grid>
          </div>
        )}
      </div>
      <Modal
        open={plantToggle}
        onClose={handlePlantModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddPlantForm />
      </Modal>
    </>
  );
}
