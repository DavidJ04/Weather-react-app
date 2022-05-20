import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (<Router><AppFrame>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos molestias at eaque sed, placeat delectus? Nam optio officia neque dolorum eaque natus accusamus a, aspernatur eos sunt corporis voluptatum.</AppFrame></Router>)