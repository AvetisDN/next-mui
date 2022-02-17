import Layout from "../components/Layout";
import AppProvider from "../context/AppProvider";

const MyApp = (props) => {
    const { Component, pageProps } = props;
    return (
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>
    );
};

export default MyApp;
