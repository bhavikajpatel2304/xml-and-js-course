<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:key name="size-search" match="size" use="@description" />
<xsl:template match="/">
    <html>
        <body style="font-family: sans-serif;font-size:20px;">
            <h1 style="color:white;background-color:green;font-weight:bold;text-align:center;">Catalog</h1>
            <ul>
                <xsl:for-each select="catalog/product">
                    <li>
                        <article style="margin-bottom: 50px;">
                            <hgroup>
                                <h3 style="display: inline; margin-right: 10px;">
                                    <xsl:value-of select="@product_id"/>
                                </h3>
                                <p style="display: inline;">
                                    <xsl:value-of select="@description"/>
                                </p>
                            </hgroup>

                            <h3>Catalog Items</h3>
                                <table border="1" cellpadding="5" style="font-weight: bold;">
                                    <tr style="color:white;background-color:#621b1b;"> 
                                        <th>Item Number</th> 
                                        <th>Price</th> 
                                        <th>Gender</th> 
                                        <th>Small</th> 
                                        <th>Medium</th> 
                                        <th>Large</th> 
                                        <th>Extra Large</th>
                                    </tr> 
                                    
                                    <xsl:for-each select="catalog_item"> 
                                        <tr>
                                        <td><xsl:value-of select="item_number"/></td>
                                        <td><xsl:value-of select="price"/></td>
                                        <td style="text-align:center;">
                                            <xsl:choose>
                                                <xsl:when test="@gender='Men'">
                                                    <span> M </span>
                                                </xsl:when>
                                                <xsl:when test="@gender='Women'">
                                                    <span> W </span>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <span> No Data </span>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </td>
                                        <td>
                                        <!--        Size : Small     -->
                                            <xsl:for-each select="size">
                                                <xsl:choose>
                                                    <xsl:when test="@description='Small'">
                                                        <table border="1" cellpadding="5" style="font-weight: bold;">
                                                            <tr style="color:white;background-color:#986767;"> 
                                                                <th>Color</th> 
                                                                <th>Image</th> 
                                                            </tr>                                            
                                                            <xsl:for-each select="color_swatch">
                                                                <tr>
                                                                    <td><xsl:value-of select="."/></td>
                                                                    <td><xsl:value-of select="@image"/></td>   
                                                                </tr>
                                                            </xsl:for-each>                                    
                                                        </table>   
                                                    </xsl:when>
                                                    <xsl:otherwise></xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:for-each>
                                        </td>
                                        <td>
                                        <!--        Size : Medium     -->
                                        <xsl:for-each select="size">
                                            <xsl:choose>
                                                <xsl:when test="@description='Medium'">
                                                    <table border="1" cellpadding="5" style="font-weight: bold;">
                                                        <tr style="color:white;background-color:#986767;"> 
                                                            <th>Color</th> 
                                                            <th>Image</th> 
                                                        </tr>                                            
                                                        <xsl:for-each select="color_swatch">
                                                            <tr>
                                                                <td><xsl:value-of select="."/></td>
                                                                <td><xsl:value-of select="@image"/></td>   
                                                            </tr>
                                                        </xsl:for-each>                                    
                                                    </table>   
                                                </xsl:when>
                                                <xsl:otherwise></xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:for-each>
                                        </td>
                                        <td>
                                        <!--        Size : Large     -->
                                            <xsl:for-each select="size">
                                                <xsl:choose>
                                                    <xsl:when test="@description='Large'">
                                                        <table border="1" cellpadding="5" style="font-weight: bold;">
                                                            <tr style="color:white;background-color:#986767;"> 
                                                                <th>Color</th> 
                                                                <th>Image</th> 
                                                            </tr>                                            
                                                            <xsl:for-each select="color_swatch">
                                                                <tr>
                                                                    <td><xsl:value-of select="."/></td>
                                                                    <td><xsl:value-of select="@image"/></td>   
                                                                </tr>
                                                            </xsl:for-each>                                    
                                                        </table>   
                                                    </xsl:when>
                                                    <xsl:otherwise></xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:for-each>
                                        </td>
                                        <td>
                                        <!--        Size : Extra Large     -->
                                            <xsl:for-each select="size">
                                                <xsl:choose>
                                                    <xsl:when test="@description='Extra Large'">
                                                        <table border="1" cellpadding="5" style="font-weight: bold;">
                                                            <tr style="color:white;background-color:#986767;"> 
                                                                <th>Color</th> 
                                                                <th>Image</th> 
                                                            </tr>                                            
                                                            <xsl:for-each select="color_swatch">
                                                                <tr>
                                                                    <td><xsl:value-of select="."/></td>
                                                                    <td><xsl:value-of select="@image"/></td>   
                                                                </tr>
                                                            </xsl:for-each>                                    
                                                        </table>   
                                                    </xsl:when>
                                                    <xsl:otherwise></xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:for-each>
                                        </td>
                                        </tr>
                                    </xsl:for-each> 
                                </table>
                        </article>
                    </li>
                </xsl:for-each>
            </ul>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>