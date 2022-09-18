import React from "react";
import {
  Grid,
  Box,
  Theme,
  Typography,
  FormControlLabel,
  Button,
  Tabs,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import BaseLayout from "../../layout/BaseLayout";
import { Form, Formik, FormikConfig, Field } from "formik";
import InputField from "../../components/Common/Field/Input";
import { CheckboxKit } from "../../components/Kit/Checkbox";
import { SwitchKit } from "../../components/Kit/Switch";
import { useQuery } from "react-query";
import { loadInitialForm } from "../../apis/services";
import { IFromRequest, IFromResponse } from "../../types/DTO/Home";
import { IStaticData, StaticData } from "../../constants/StaticData";
import { RadioKit } from "../../components/Kit/Radio";
import { RadioGroup } from "@mui/material";
import * as Yup from "yup";

const DaynamicTabsForm = React.lazy(() => import("./Components/Tabs"));

interface IHomeProps {}
interface FromValues extends IFromRequest {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "90vh",
    marginTop: "25px",
    border: "1px solid #cccc",
    borderRadius: "12px",
  },
  form: {
    marginTop: "25px",
    border: "1px solid #cccc",
    padding: "15px",
    borderRadius: "12px",
  },
  wrapperForm: {
    padding: "15px",
  },
}));

const borderBottom: Record<string, string> = {
  borderBottom: "1px solid #ccc",
};

const Home: React.FC<IHomeProps> = (props) => {
  const classes = useStyles();

  const { data, isLoading } = useQuery<IFromResponse["data"], Error>(
    "form",
    loadInitialForm,
    {
      // enabled: false,
      // cacheTime: 5000,
      // keepPreviousData: true,
    }
  );

  const FormValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handlers: FormikConfig<FromValues> = {
    initialValues: {
      is_allow_download: data?.conversationDownloadsEnabled || false,
      is_allow_clear: data?.conversationClearEnabled || false,
      is_live_chat_icon: data?.showLiveChatIcon || false,
      is_request_user: data?.collectUserInfoEnabled || false,
      is_receive_email: data?.conversationTranscripts?.emailEnabled || false,
      email: data?.conversationTranscripts?.emailAddress || "",
      // @ts-ignore
      frequency:
        data?.conversationTranscripts?.emailFrequency?.toLowerCase() ||
        "WEEKLY",
    },
    onSubmit: async (values, { setErrors }) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors: Record<string, any> = {};

      // if (!values.email) {
      //   errors.email = "Required";
      // } else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      // ) {
      //   errors.email = "Invalid email address";
      // }

      return errors;
    },
    validationSchema: FormValidation,
    enableReinitialize: true,
  };

  return (
    <Box className={classes.root}>
      <BaseLayout>
        <React.Fragment>
          {isLoading && data !== undefined && "loading data ..."}

          {!isLoading && data && (
            <Box p={3}>
              <Box style={borderBottom}>
                <React.Suspense fallback={<>loading...</>}>
                  <DaynamicTabsForm />
                </React.Suspense>
              </Box>
              <Box className={classes.form}>
                <Box style={{ ...borderBottom, paddingBottom: "15px" }}>
                  <Typography variant="h5">General Settings</Typography>
                </Box>
                <Box className={classes.wrapperForm}>
                  <Formik<FromValues> {...handlers}>
                    {({ values, errors, setFieldValue, resetForm }) => {
                      return (
                        <Box component={Form} width={"100%"}>
                          <Grid container justifyContent="space-between">
                            <Grid xs={12} item>
                              {StaticData.map(
                                (item: IStaticData["data"]["0"]) => (
                                  <Grid
                                    container
                                    justifyContent="space-between"
                                    key={item.id}
                                  >
                                    <Grid xs={10} item>
                                      <Box
                                        display="flex"
                                        flexDirection="column"
                                        style={{ margin: "8px 0" }}
                                      >
                                        <Typography variant="body1">
                                          {item.title}
                                        </Typography>
                                        <Typography
                                          variant="subtitle2"
                                          color="#ccc"
                                        >
                                          {item.subTitle}
                                        </Typography>
                                      </Box>
                                    </Grid>
                                    <Grid xs={2} item>
                                      <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                      >
                                        <FormControlLabel
                                          style={{ margin: "0" }}
                                          control={
                                            <SwitchKit
                                              name={item.name}
                                              // @ts-ignore
                                              checked={values[item.name]}
                                              onChange={(e) =>
                                                setFieldValue(
                                                  `${item.name}`,
                                                  e.target.checked,
                                                  true
                                                )
                                              }
                                            />
                                          }
                                          label={undefined}
                                        />
                                      </Box>
                                    </Grid>
                                  </Grid>
                                )
                              )}
                            </Grid>

                            <Grid xs={12} item>
                              <Grid container justifyContent="space-around">
                                <Grid xs={6} item>
                                  <Typography variant="body1">
                                    text for email
                                  </Typography>
                                </Grid>
                                <Grid xs={6} item>
                                  <Field
                                    type="text"
                                    name={"email"}
                                    id={"email"}
                                    label="email"
                                    component={InputField}
                                    isRequired={false}
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid xs={12} item mt={3}>
                              <Grid container justifyContent="space-between">
                                <Grid xs={4} item>
                                  <Typography variant="body1">
                                    Frequency
                                  </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Box display="flex" justifyContent="flex-end">
                                    <RadioGroup
                                      style={{ margin: "0", padding: "0" }}
                                      aria-label="type"
                                      name="frequency"
                                      id="frequency"
                                      value={values.frequency}
                                      onChange={(e) => {
                                        setFieldValue(
                                          "frequency",
                                          e.target.value
                                        );
                                      }}
                                    >
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                      >
                                        <FormControlLabel
                                          style={{ margin: "0" }}
                                          value={"weekly"}
                                          control={
                                            <RadioKit
                                              color={"primary"}
                                              value={"weekly"}
                                              label={"weekly"}
                                            />
                                          }
                                          label={""}
                                        />
                                        <FormControlLabel
                                          style={{ margin: "0" }}
                                          value={"daily"}
                                          control={
                                            <RadioKit
                                              color={"primary"}
                                              value={"daily"}
                                              label={"daily"}
                                            />
                                          }
                                          label={""}
                                        />
                                      </Box>
                                    </RadioGroup>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={12}>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                                style={{ marginTop: "45px" }}
                              >
                                <Button
                                  color={"primary"}
                                  variant={"outlined"}
                                  onClick={() => resetForm()}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  color={"primary"}
                                  variant={"contained"}
                                  type={"submit"}
                                >
                                  Save Changes
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                      );
                    }}
                  </Formik>
                </Box>
              </Box>
            </Box>
          )}
        </React.Fragment>
      </BaseLayout>
    </Box>
  );
};

export default Home;
