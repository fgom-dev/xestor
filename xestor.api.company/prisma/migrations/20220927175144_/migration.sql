-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "trading_name" TEXT,
    "tax_regime" TEXT NOT NULL,
    "state_registration" TEXT NOT NULL,
    "status" TEXT DEFAULT 'a',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "public_place" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "county_code" TEXT NOT NULL,
    "federated_unit" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "status" TEXT DEFAULT 'a',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "companyId" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "status" TEXT DEFAULT 'a',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "companyId" TEXT,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_cnpj_key" ON "company"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "company_state_registration_key" ON "company"("state_registration");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
