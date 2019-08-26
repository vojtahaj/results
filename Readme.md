**Results**

Aplikace, která umožňuje zobrazování živých výsledků.
Je připojena k databázi, které se dotazuje na dané změny v závodě.
Aby byla aplikace funkční a smysluplná, je nutné, aby byla propojena
 s DB a SW třetí strany.
 
 **Kompilace** vytvořit build na frontend `npm build start`,
  následně `mvn package -Pdev` nebo `mvn install -Pdev` zbuildí backend a nahraje frontend
   do příslušných adresářů. V prohlížeči se zobrazí na portech `:8080`.
    Aplikace obsahuje také `Dockerfile` a `docker-compose.yml`.
    **Technologie:** Mysql, SpringBoot, pro komunikaci mezi klientem a serverem
    STOMP přes WEBSOCKET. Frontend je vytvořen pomocí REACT.js, CSS, prvků
    z material UI a základních HTML tagů.   