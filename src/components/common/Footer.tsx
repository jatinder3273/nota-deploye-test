import React from 'react'

const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer text-center py-4">
            Copyright {new Date().getFullYear()}. All Rights Reserved
        </div>
    )
}

export default Footer
