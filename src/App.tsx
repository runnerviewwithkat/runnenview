import React from "react";

import { AnimatedRoutes } from "./components";
import { withLayout } from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => <QueryClientProvider client={queryClient}><AnimatedRoutes /></QueryClientProvider>;

export default withLayout(App);
