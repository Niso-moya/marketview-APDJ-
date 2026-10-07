// GenerateUserManual.js
export function setupUserManualDownload(triggerElementId) {
    const triggerBtn = document.getElementById(triggerElementId);
    if (!triggerBtn) return;

    triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const pdfWindow = window.open('', '_blank');
        if (!pdfWindow) {
            alert("Popup blocked! Please allow popups to download the User Manual.");
            return;
        }

        pdfWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>MarketView_User_Manual.pdf</title>
                <style>
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b; line-height: 1.6; padding: 40px; background: #fff; }
                    h1 { color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 5px; font-size: 24px; }
                    .subtitle { font-size: 12px; color: #64748b; font-weight: bold; margin-bottom: 30px; letter-spacing: 1px; text-transform: uppercase; }
                    h2 { color: #0f172a; margin-top: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 16px; }
                    p, li { font-size: 13px; color: #334155; }
                    ul { margin-bottom: 20px; padding-left: 20px; }
                    li { margin-bottom: 8px; }
                    .footer { margin-top: 60px; font-size: 11px; color: #94a3b8; border-top: 1px solid #cbd5e1; padding-top: 12px; text-align: center; }
                    @media print { body { padding: 20px; } }
                </style>
            </head>
            <body>
                <h1>MarketView Trading Terminal</h1>
                <div class="subtitle">Official User Manual &bull; Version 2.0 (2026)</div>
                
                <h2>1. Platform Overview</h2>
                <p>MarketView is a high-performance peer-to-peer digital marketplace and trading platform designed for verified buyers and merchants. The platform provides secure inventory discovery, encrypted direct messaging, and structured order fulfillment tracking.</p>
                
                <h2>2. Buyer Terminal Workflow</h2>
                <ul>
                    <li><strong>Browse Catalog:</strong> Explore active vendor listings in real-time. Use the search bar to instantly filter items by name or category.</li>
                    <li><strong>Track Purchases:</strong> Monitor your active purchase orders, delivery destination addresses, and real-time fulfillment status badges.</li>
                    <li><strong>Merchant Chats:</strong> Open direct inquiries with verified vendors to negotiate terms or ask questions about product availability.</li>
                    <li><strong>Secure Checkout:</strong> Click "Purchase" on any item to review verified merchant credentials and submit your delivery destination.</li>
                </ul>

                <h2>3. Security & Compliance</h2>
                <p>All user sessions are authenticated with role-based routing. Data transmissions between buyers and sellers are encrypted and stored securely within the cloud database infrastructure.</p>

                <div class="footer">
                    &copy; 2026 MarketView Digital Agency. All rights reserved. Confidential Technical Documentation.
                </div>

                <script>
                    window.onload = function() {
                        setTimeout(() => {
                            window.print();
                        }, 400);
                    };
                <\/script>
            </body>
            </html>
        `);
        pdfWindow.document.close();
    });
}