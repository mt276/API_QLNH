CREATE DATABASE QLNH
GO
USE QLNH
GO
CREATE TABLE Menu
(
	MenuID			INT IDENTITY PRIMARY KEY NOT NULL,
	MenuName		NVARCHAR(50),

)
GO
CREATE TABLE Menu_Item
(
	Menu_ItemID			INT IDENTITY PRIMARY KEY NOT NULL,
	Menu_ItemName		NVARCHAR(500),
	MenuID				INT,
	Menu_ItemStartDate	Date,
	Menu_ItemPhoto		NVARCHAR(500),
	FOREIGN KEY (MenuID) REFERENCES dbo.Menu (MenuID)

)
GO
SET IDENTITY_INSERT dbo.Menu ON
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (1,N'Khai vị')
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (2,N'Món Chính')
INSERT INTO dbo.Menu (MenuID,MenuName) VALUES (3,N'Tráng miệng')
SET IDENTITY_INSERT dbo.Menu OFF
SET IDENTITY_INSERT dbo.Menu_Item ON
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (1,N'Salad',1,GETDATE(),'menuItem1.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (2,N'Nem nướng',1,GETDATE(),'menuItem2.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (3,N'Các loại gỏi',1,GETDATE(),'menuItem3.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (4,N'Bò lúc lắc',2,GETDATE(),'menuItem4.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (5,N'Bò cà ri',2,GETDATE(),'menuItem5.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (6,N'Mực nướng muối ớt',2,GETDATE(),'menuItem6.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (7,N'Tôm hấp bia',2,GETDATE(),'menuItem7.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (8,N'Gà bó xôi',2,GETDATE(),'menuItem8.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (9,N'Lẩu thập cẩm',2,GETDATE(),'menuItem9.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (10,N'Trái cây tươi',3,GETDATE(),'menuItem10.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (11,N'Bánh flan',3,GETDATE(),'menuItem11.jpg')
INSERT INTO dbo.Menu_Item (Menu_ItemID,Menu_ItemName,MenuID,Menu_ItemStartDate,Menu_ItemPhoto) VALUES (12,N'Sữa chua',3,GETDATE(),'menuItem12.jpg')
SET IDENTITY_INSERT dbo.Menu_Item OFF
GO
select * from dbo.Menu
select * from dbo.Menu_Item