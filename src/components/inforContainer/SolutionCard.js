import React from 'react';

import SettingSvg from "../../img/solutionCard/setting.svg";
import LinkSvg from "../../img/solutionCard/link1.svg";
import ChatSvg from "../../img/solutionCard/chat.svg";
import SoftwareSvg from "../../img/solutionCard/software.svg";
import shap_CRM from '../../img/solutionCard/shap_CRM.png';
import shap_marketing from '../../img/solutionCard/shap_marketing.png';
import shap_helped from '../../img/solutionCard/shap_helped.png';
import shap_sale from '../../img/solutionCard/shap_sale.png';

import {
    Box,
    Card,
    Typography,
    Link
} from '@mui/material';

const solutionList = [
    {
        title: "CRM Software",
        subTitle:
            "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
        icon: SettingSvg,
        sharp: shap_CRM,
    },
    {
        title: "Marketing Automation",
        subTitle:
            "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
        icon: LinkSvg,
        sharp: shap_marketing,
    },
    {
        title: "Helpdesk Software",
        subTitle:
            "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
        icon: ChatSvg,
        sharp: shap_helped,
    },
    {
        title: "Sales Software",
        subTitle:
            "Connect to a multitude of sources like files and feeds, popular apps, cloud and onpremise databases, custom apps .",
        icon: SoftwareSvg,
        sharp: shap_sale,
    }
]

const cardStyle = {
    container: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "1176px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "24px",
        padding: "0",
    },
    card: {
        width: "calc(50% - 76px)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "6px",
        boxShadow: "1px 1px 10px rgb(98 124 137 / 10%)",
        position: "relative",
    },
    title: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#212121",
        fontFamily: "'Arimo', sans-serif",
    },
    subTitle: {
        lineHeight: "30px",
        marginBottom: "10px",
        fontFamily: "'Arimo', sans-serif",
    }, 
    link: {
        fontSize: "16px",
        fontStyle: "italic"
    }
}

const SolutionCard = () => {
    return (
        <Box
            sx={cardStyle.container}
        >
            {
                solutionList.map((solution, index) => (
                    <Card key={index}
                        sx={cardStyle.card}
                    >
                        <Box
                            sx={{
                                height: "60px",
                                marginBottom: "15px",
                                display: "flex",
                                alignItems: "flex-end",
                            }}
                        >
                            <img
                                src={solution.icon}
                                alt=""
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0
                            }}
                        >
                            <img src={solution.sharp} alt="" />
                        </Box>
                        <Typography sx={cardStyle.title}>
                            {solution.title}
                        </Typography>
                        <Typography sx={cardStyle.subTitle}>
                            {solution.subTitle}
                        </Typography>
                        <Link color='inherit'sx={cardStyle.link}>
                            Read more
                        </Link>
                    </Card>
                ))
            }
        </Box>
    )
}

export default SolutionCard