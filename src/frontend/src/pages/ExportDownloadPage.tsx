import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileArchive, Info, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ExportDownloadPage() {
  const handleDownload = () => {
    // Trigger download of the static export file
    const link = document.createElement('a');
    link.href = '/assets/export/cafe-site-export.zip';
    link.download = 'contour-cafe-export.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <FileArchive className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Export Website</h1>
          <p className="text-lg text-muted-foreground">
            Download a complete package of this website for WordPress and Elementor integration.
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-8 animate-slide-up">
          <Info className="h-4 w-4" />
          <AlertTitle>What's Included</AlertTitle>
          <AlertDescription>
            This export package contains all the HTML, CSS, JavaScript, and assets needed to recreate 
            this website. It's designed to be imported into WordPress and edited using Elementor.
          </AlertDescription>
        </Alert>

        {/* Download Card */}
        <Card className="glass-card mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="text-2xl">Download Export Package</CardTitle>
            <CardDescription>
              Get the complete static export of Contour Café website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-4">
                <FileArchive className="h-10 w-10 text-primary" />
                <div>
                  <p className="font-semibold">contour-cafe-export.zip</p>
                  <p className="text-sm text-muted-foreground">Complete website package</p>
                </div>
              </div>
              <Button size="lg" onClick={handleDownload} className="group">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download
              </Button>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Package Contents:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>All HTML pages (Home, Menu, About, Contact)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complete CSS stylesheets with contour theme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>JavaScript files and 3D scene components</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>All images and assets (contour patterns, icons)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>README with integration instructions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="glass-card animate-slide-up" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="text-xl">WordPress & Elementor Integration</CardTitle>
            <CardDescription>
              Follow these general steps to use this export with WordPress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Step 1: Extract the Archive</h3>
                <p className="text-sm text-muted-foreground">
                  Unzip the downloaded file to access all website files and assets.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 2: Prepare WordPress</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure you have WordPress installed with the Elementor plugin activated. 
                  You may also want to install a blank theme or starter template.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 3: Import Assets</h3>
                <p className="text-sm text-muted-foreground">
                  Upload images and assets to your WordPress media library. Update any 
                  hardcoded paths to match your WordPress installation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 4: Create Pages in Elementor</h3>
                <p className="text-sm text-muted-foreground">
                  Use Elementor's visual editor to recreate the page layouts. Copy the HTML 
                  structure and styles from the exported files as a reference. Elementor's 
                  HTML widget can help with custom code sections.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 5: Add Custom CSS</h3>
                <p className="text-sm text-muted-foreground">
                  Copy the custom CSS from the export into WordPress Customizer's Additional 
                  CSS section or use a custom CSS plugin to maintain the contour theme styling.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Step 6: Test & Customize</h3>
                <p className="text-sm text-muted-foreground">
                  Preview your pages, test all links and interactions, then customize the 
                  content using Elementor's intuitive drag-and-drop interface.
                </p>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Note:</strong> The 3D interactive scene uses React Three Fiber and may 
                require additional setup or a custom WordPress plugin to function in WordPress. 
                Consider using static images or videos as alternatives for the 3D content.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
