import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { dataEntryStyling } from "./dataEntry";
import { eventCaptureStyling } from "./eventCapture";
import { useLoading } from "../loading";

const styles = {
    iframe: { width: "100%", height: 1000 },
};

const IFrame = ({ src, customize, builder }) => {
    const ref = useRef(null);
    const loading = useLoading({ isLoading: true });

    useEffect(() => {
        if (customize && builder)
            ref.current.addEventListener("load", () =>
                customize(ref.current, builder).then(() => loading.hide())
            );
    }, [customize, builder, loading]);

    return [<iframe ref={ref} src={src} title={"IFrame"} style={styles.iframe} />];
};

IFrame.propTypes = {
    src: PropTypes.string.isRequired,
    styling: PropTypes.func,
    builder: PropTypes.object,
};

IFrame.defaultProps = {};

export default IFrame;
export { dataEntryStyling, eventCaptureStyling };
