<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match= "/products">
    <html>
        <body>
            <h1>Products List</h1>
            <h2 style="color:blue;">Product Name</h2>
            
            <ol type="1" style="font-weight: bold;color:green;">
                <xsl:for-each select="product">
                    <li style="list-style-position:inside;border-block-end: 1px dashed #A9A9A9;">
                        <xsl:value-of select="productName"/>
                    </li>
                </xsl:for-each>
            </ol>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>